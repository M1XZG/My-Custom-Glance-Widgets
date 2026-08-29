const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const widgetsDir = path.join(__dirname, '..', 'widgets');

function validateYamlBlock(source, block, errors) {
  try {
    yaml.load(block);
  } catch (error) {
    errors.push(`${source}: invalid YAML - ${error.message}`);
  }

  for (const [index, line] of block.split('\n').entries()) {
    const match = line.match(/^\s*[A-Za-z0-9_-]+:\s+(https?:\/\/\S*&\S*)\s*$/);
    if (match) {
      errors.push(`${source}: unquoted URL with query string on line ${index + 1}`);
    }
  }
}

function validateWidgets() {
  const entries = fs.readdirSync(widgetsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory());
  let hasErrors = false;

  for (const entry of entries) {
    const widgetPath = path.join(widgetsDir, entry.name);
    const errors = [];

    for (const file of ['template.txt', 'widget.md', 'meta.yml']) {
      if (!fs.existsSync(path.join(widgetPath, file))) {
        errors.push(`Missing ${file}`);
      }
    }

    const metaPath = path.join(widgetPath, 'meta.yml');
    if (fs.existsSync(metaPath)) {
      try {
        const meta = yaml.load(fs.readFileSync(metaPath, 'utf8'));
        for (const field of ['title', 'description', 'author']) {
          if (!meta || typeof meta[field] !== 'string' || meta[field].trim() === '') {
            errors.push(`meta.yml: missing or empty "${field}"`);
          }
        }
      } catch (error) {
        errors.push(`meta.yml: invalid YAML - ${error.message}`);
      }
    }

    const templatePath = path.join(widgetPath, 'template.txt');
    if (fs.existsSync(templatePath)) {
      const template = fs.readFileSync(templatePath, 'utf8');
      const requiredMatch = template.match(/(?:^|\n)required: \|\n([\s\S]*)$/);
      if (requiredMatch) {
        validateYamlBlock('template.txt: required YAML', requiredMatch[1], errors);
      }
    }

    const widgetDocPath = path.join(widgetPath, 'widget.md');
    if (fs.existsSync(widgetDocPath)) {
      const widgetDoc = fs.readFileSync(widgetDocPath, 'utf8');
      const yamlBlocks = widgetDoc.matchAll(/```ya?ml\n([\s\S]*?)\n```/g);
      let blockIndex = 0;
      for (const block of yamlBlocks) {
        blockIndex += 1;
        validateYamlBlock(`widget.md: YAML code block #${blockIndex}`, block[1], errors);
      }
    }

    if (errors.length > 0) {
      hasErrors = true;
      console.error(`\nFAIL ${entry.name}/`);
      errors.forEach((error) => console.error(`  - ${error}`));
    } else {
      console.log(`PASS ${entry.name}/`);
    }
  }

  if (hasErrors) {
    process.exit(1);
  }

  console.log('\nAll widgets valid.');
}

validateWidgets();

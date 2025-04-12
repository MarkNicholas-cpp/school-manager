const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];

if (!componentName) {
  console.error('❌ Please provide a component name.');
  process.exit(1);
}

const fileName = `${componentName}.tsx`;
const componentCode = `
const ${componentName} = () => {
    return <div>${componentName} works</div>;
};

export default ${componentName};
`;

fs.writeFile(path.join(__dirname, fileName), componentCode.trim(), (err) => {
  if (err) {
    console.error('❌ Error creating file:', err);
  } else {
    console.log(`✅ Component "${componentName}" created successfully as ${fileName}`);
  }
});

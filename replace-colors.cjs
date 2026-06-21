const fs = require('fs');
const path = require('path');

function replaceColors(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace brand accent colors with primary
    content = content.replace(/(text|bg|border|ring|stroke)-(blue|indigo|purple|emerald|rose|teal)-([456]00)/g, '$1-primary');
    
    // Replace light brand accents with primary-50 or primary-100
    content = content.replace(/(text|bg|border)-(blue|indigo|purple|emerald|rose|teal)-50\b/g, '$1-primary-50');
    content = content.replace(/(text|bg|border)-(blue|indigo|purple|emerald|rose|teal)-(100|200)/g, '$1-primary-100');
    
    // Replace dark brand accents with primary-hover
    content = content.replace(/(text|bg|border)-(blue|indigo|purple|emerald|rose|teal)-[789]00/g, '$1-primary-hover');

    // For specific gradient classes
    content = content.replace(/from-(blue|indigo|purple|emerald|rose|teal)-[456]00/g, 'from-primary');
    content = content.replace(/to-(blue|indigo|purple|emerald|rose|teal)-[456]00/g, 'to-primary-hover');

    // Replace the hardcoded hex codes with semantic ones
    content = content.replace(/bg-\[\#E5A93C\]/g, 'bg-primary');
    content = content.replace(/hover:bg-\[\#D4982B\]/g, 'hover:bg-primary-hover');
    content = content.replace(/text-\[\#ff5a00\]/g, 'text-primary');
    content = content.replace(/bg-\[\#ff5a00\]\/30/g, 'bg-primary/30');
    content = content.replace(/stroke="\#ff5a00"/g, 'stroke="currentColor" className="text-primary"');
    
    // Note: User requested Navy for #0F172A which is slate-900
    // User requested Text for #475569 which is slate-600
    // We already mapped them in tailwind config or just leave them as slate since they map 1:1.
    // However, I will replace `slate-900` with `navy` just to be semantic as requested!
    content = content.replace(/slate-900/g, 'navy');
    content = content.replace(/slate-800/g, 'navy-light');

    // Replace raw hex codes from inline styles if any (like in the feature grid we removed, but just in case)
    content = content.replace(/#3b6df0/gi, '#E2A73C');
    content = content.replace(/#6d5ce8/gi, '#E2A73C');
    content = content.replace(/#10b981/gi, '#E2A73C');
    content = content.replace(/#f43f5e/gi, '#E2A73C');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Replaced colors in ${filePath}`);
}

const targetFile = process.argv[2];
if (targetFile) {
    replaceColors(path.resolve(targetFile));
} else {
    // Process all known files
    const srcDir = path.resolve(__dirname, 'src');
    replaceColors(path.join(srcDir, 'pages', 'Home.tsx'));
    replaceColors(path.join(srcDir, 'pages', 'Products.tsx'));
    if (fs.existsSync(path.join(srcDir, 'components', 'Navbar.tsx'))) replaceColors(path.join(srcDir, 'components', 'Navbar.tsx'));
    if (fs.existsSync(path.join(srcDir, 'components', 'Footer.tsx'))) replaceColors(path.join(srcDir, 'components', 'Footer.tsx'));
    replaceColors(path.join(srcDir, 'index.css'));
}

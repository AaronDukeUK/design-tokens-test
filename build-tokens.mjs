import StyleDictionary from 'style-dictionary';
import { register, expandTypesMap } from '@tokens-studio/sd-transforms';

register(StyleDictionary);

const sd = new StyleDictionary({
    source: ['tokens/tokens.json'],
    preprocessors: ['tokens-studio'],
    expand: { typesMap: expandTypesMap },

    platforms: {
        css: {
            transformGroup: 'tokens-studio',
            transforms: ['name/kebab'],
            buildPath: 'build/css/',
            files: [
                {
                    destination: 'tokens.css',
                    format: 'css/variables',
                    options: {
                        selector: ':root'
                    }
                }
            ]
        },
        ts: {
            transformGroup: 'tokens-studio',
            transforms: ['name/kebab'],
            buildPath: 'build/ts/',
            files: [
                {
                    destination: 'tokens.ts',
                    format: 'javascript/module'
                }
            ]
        }
    }
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
console.log('✅ Tokens built to build/css and build/ts');
// style-dictionary.config.mjs
import StyleDictionary from 'style-dictionary';
import { register, expandTypesMap } from '@tokens-studio/sd-transforms';

// ⬇️ Add excludeParentKeys: true
register(StyleDictionary, { excludeParentKeys: true });

export default {
    source: ['tokens/figma-tokens.json'],
    preprocessors: ['tokens-studio'],
    expand: { typesMap: expandTypesMap },
    platforms: {
        css: {
            transformGroup: 'tokens-studio',
            transforms: ['name/kebab'],
            buildPath: 'build/css/',
            files: [
                { destination: 'tokens.css', format: 'css/variables',
                    options: { selector: ':root', outputReferences: true } }
            ]
        },
        ts: {
            transformGroup: 'tokens-studio',
            transforms: ['name/kebab'],
            buildPath: 'build/ts/',
            files: [
                { destination: 'tokens.ts', format: 'javascript/module',
                    options: { outputReferences: true } }
            ]
        }
    },
    log: {"verbosity": "verbose"}
};

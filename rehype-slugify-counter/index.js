import { hasProperty } from 'hast-util-has-property';
import { headingRank } from 'hast-util-heading-rank';
import { toString } from 'hast-util-to-string';
import { visit } from 'unist-util-visit';
import Slugger from 'github-slugger';

const slugger = new Slugger();
let counter = 0;

export default function rehypeSlugify(options) {
    return (tree) => {
         
        slugger.reset();
        counter = 0;
 
        visit(tree, 'element', (node) => {
            if (headingRank(node) && node.properties && !hasProperty(node, 'id')) {
                counter++;
                node.properties.id = slugger.slug(toString(node));
                node.counter = counter;
            }
        })
    }
}
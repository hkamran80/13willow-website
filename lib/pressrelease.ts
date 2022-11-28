import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const pressReleasesDirectory = join(process.cwd(), "_pressreleases");

export const getPRSlugs = () => fs.readdirSync(pressReleasesDirectory);

export const getPRBySlug = (slug: string, fields: string[] = []) => {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(pressReleasesDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    type Items = {
        [key: string]: string;
    };

    const items: Items = {};

    fields.forEach((field) => {
        if (field === "slug") {
            items[field] = realSlug;
        }

        if (field === "content") {
            items[field] = content;
        }

        if (typeof data[field] !== "undefined") {
            items[field] = data[field];
        }
    });

    return items;
};

export const getAllPRs = (fields: string[] = []) =>
    getPRSlugs()
        .map((slug) => getPRBySlug(slug, fields))
        .sort((pr1, pr2) => (pr1.date > pr2.date ? -1 : 1));

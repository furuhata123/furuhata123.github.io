const { DateTime } = require("luxon");
const path = require("path");
const fs = require("fs");
module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "public/assets": "assets" });

    eleventyConfig.addCollection("blog", function (collectionApi) {
        return collectionApi.getFilteredByTag("blog");
    });
    eleventyConfig.addCollection("log", function (collectionApi) {
        return collectionApi.getFilteredByTag("log");
    });


    // 摘要短代码
    /*eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        excerpt_separator: "<!-- readmore -->",
        excerpt_alias: function(file) {
            if (file.excerpt) {
                const md = require("markdown-it")({
                    html: true,
                    linkify: true,
                    typographer: true
                });
                
                file.excerpt = md.render(file.excerpt);
            }
        }
    });*/
    eleventyConfig.addFilter("get_excerpt", function (content) {
        const separator = "<!-- readmore -->";
        if (content && content.includes(separator)) {
            return content.split(separator)[0];
        }
        return content;
    });

    // date format
    eleventyConfig.addFilter("date", (value, format = "yyyy-MM-dd") => {
        if (!(value instanceof Date)) {
            return "Invalid Date";
        }
        return DateTime.fromJSDate(value, { zone: "utc" }).toFormat(format);
    });
    

    // tag页面生成
    eleventyConfig.addCollection("tagList", function (collectionApi) {
        const tagSet = new Set();
        collectionApi.getFilteredByGlob("./src/blog/posts/*.{md,html}").forEach(item => {
            const rawTags = [item.data.tags || []].flat(Infinity);
            rawTags.forEach(tag => {
                const cleanTag = String(tag).trim();
                if (cleanTag && cleanTag !== "blog") {
                    tagSet.add(cleanTag);
                }
            });
        });
        return [...tagSet];
    });
    // hobby tag list
    eleventyConfig.addCollection("hobbyTagList", function (collectionApi) {
        const tagSet = new Set();
        collectionApi.getFilteredByGlob("src/hobby/logs/**/*.{md,html}").forEach(item => {


            const rawTags = [item.data.tags || []].flat(Infinity);
            rawTags.forEach(tag => {
                const cleanTag = String(tag).trim();
                if (cleanTag && cleanTag !== "log") {
                    tagSet.add(cleanTag);
                }
            });
        });
        return [...tagSet];
    });

    // for archive
    eleventyConfig.addFilter("fileModifiedTime", function (inputPath) {
        try {
            const stats = fs.statSync(inputPath);
            return stats.mtime;  //last modify
        } catch (e) {
            return null;
        }
    });

    // hobby posts
    eleventyConfig.addCollection("hobbyPosts", function (collectionApi) {
        return collectionApi.getAll().filter(item => {
            return item.inputPath && item.inputPath.includes("/hobby/posts/");
        });
    });

    return {
        pathPrefix: "/",
        dir: {
            input: "src",
            includes: "_includes",
            output: "docs",
        }

    };

}
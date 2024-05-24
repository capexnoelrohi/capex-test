# CaPEx Frontend Test

<p align="center">
  <a href="#instructions"><strong>Instructions</strong></a> ·
  <a href="#techstack"><strong>TechStack</strong></a> ·
  <a href="#prerequisites"><strong>Prerequisites</strong></a> ·
  <a href="#checklist"><strong>CheckList</strong></a> ·
</p>

## Instructions

1. In your machine, install `node` and pnpm using `npm install -g pnpm` if you haven't already
2. Copy the repo using `pnpm create next-app -e https://github.com/capexnoelrohi/capex-test`
4. Move into the folder via `cd capex-test` in your terminal
3. Rename `.env.example` to `.env`
5. Install dependencies by running `pnpm install` in your terminal
6. Create a database in your local MySQL server named as `capex_test`
7. Run `pnpm db migrate` in your terminal to create the tables
8. Create a schema in `src/db/schema/main.ts` for `role` table with fields `user_id` and `name` 
9. Create a relation in `src/db/schema/relations.ts` for `user` and `role` tables
10. Run `pnpm db generate` in your terminal to generate the sql files
11. Create a CRUD for roles in `/role` route following the example in `/example` (you can copy paste folder, and modify as needed)
12. Push it on your github repository, and add `capexnoelrohi` as collaborator in the repository

## TechStack

This repo is made with the following technologies:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [MySQL](https://www.mysql.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Sonner](https://sonner.emilkowal.ski/)

## Prerequisites

- Node.js 20.x
- MySQL server ( Preferrable [Laragon](https://laragon.org/) )


# CheckList

- [ ] Role Schema with `user_id` and `name` fields
- [ ]  One-to-Many relation of `role` to `user` table
- [ ] One-to-one relation of `user` to `role` table
- [ ] Migration files for `role` table
- [ ] CRUD for `role` in `/role` route

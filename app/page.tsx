import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const getTables = async () => {
  const accessToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5MjExMzE2MCwianRpIjoiZDE3MjZkZGUtNzgzOS00YjkyLTllZWEtZTBkMDUyZjQ2ODQ5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImFudGhvbnkiLCJuYmYiOjE2OTIxMTMxNjAsImV4cCI6MTY5MjExNDA2MH0.YE3sofo8isbzNbJlh_Qtw5JFBUH3mwagH52eoNbU6zE";
  const headers = { 'Authorization': accessToken };
  const res = await fetch("http://anthonyma32.pythonanywhere.com/directivedb/v1/tables?tableName=planning_objectives", { headers });
  const tables = await res.json();
  return tables;
}



export default async function IndexPage() {
  const tables = await getTables()
  console.log(tables)
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Northwell Health Directive Dashboard <br className="hidden sm:inline" />
          Department of Radiation Medicine
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Patient Specific Customizable Treatment Directives
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  
  )
}

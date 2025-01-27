"use client"
import { useQueryState } from "nuqs"
import { Container } from "./_components/helpers/container"
import { LinkButtons } from "./_components/helpers/link-buttons"
import { ComponentRenderer } from "./_components/helpers/component-render"

const overallLinks = [
  "Basics",
  "Gestures",
  "Controls",
  "ViewBased",
  "ScrollBased",
]

export default function OverAllAnim() {
  const [selectedComponent, setSelectedComponent] = useQueryState("component", {
    defaultValue: "Basics",
  })
  return (
    <Container>
      <h1 className="w-full py-4 text-5xl font-thin">Overall Animations.</h1>
      <LinkButtons
        links={overallLinks}
        selectedComponent={selectedComponent}
        onSelect={setSelectedComponent}
      />

      <div className="flex w-full flex-col gap-8">
        <div className="h-20" />
        <ComponentRenderer selectedComponent={selectedComponent} />
        <div className="h-40" />
      </div>
    </Container>
  )
}

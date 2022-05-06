import * as React from "react";
import { DragCard } from "../Card";
import { CheckIcon } from '@heroicons/react/solid'

export interface IRoadmapCardProps {}

const steps = [
  { name: 'Council', description: 'In the midst of the night the ancient ninja council was reunited and pledged their vows. A weekly recurrence was set to monitor and advise the development.', href: '#', status: 'complete' },
  {
    name: 'A different kind of bot',
    description: 'Observing the NFT space and discord communities, our ninjas gathered information and devised blueprints for a different kind of bot. Tailored with their own skills, the bot would be the digital incarnation of a ninja. Fast, reliable, secure, across gems, looks or seas.',
    href: '#',
    status: 'complete',
  },
  { name: 'Business information', description: 'Penatibus eu quis ante.', href: '#', status: 'current' },
  { name: 'Theme', description: 'Faucibus nec enim leo et.', href: '#', status: 'upcoming' },
  { name: 'Preview', description: 'Iusto et officia maiores porro ad non quas.', href: '#', status: 'upcoming' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function RoadmapCard(props: IRoadmapCardProps) {
  return (
    <DragCard
      className="md:w-80 card"
      title="Ninja Path"
      defaultPosition={{ x: 1000, y: -20 }}
    >
      <div className="mb-4">A well-executed cartwheel can help you avoid an unpleasant obstacole like a landmine, puddle or dozing alligator.</div>

      <div className="mb-4 overflow-y-auto h-100">
        <nav aria-label="Progress">
          <ol role="list" className="overflow-hidden">
            {steps.map((step, stepIdx) => (
              <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative')}>
                {step.status === 'complete' ? (
                  <>
                    {stepIdx !== steps.length - 1 ? (
                      <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-red-700" aria-hidden="true" />
                    ) : null}
                    <a href={step.href} className="relative flex items-start group">
                      <span className="h-9 flex items-center">
                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-red-700 rounded-full group-hover:bg-red-900">
                          <CheckIcon className="w-5 h-5 text-white" aria-hidden="true" />
                        </span>
                      </span>
                      <span className="ml-4 min-w-0 flex flex-col">
                        <span className="text-xs font-semibold tracking-wide uppercase">{step.name}</span>
                        <span className="text-sm text-gray-500">{step.description}</span>
                      </span>
                    </a>
                  </>
                ) : step.status === 'current' ? (
                  <>
                    {stepIdx !== steps.length - 1 ? (
                      <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true" />
                    ) : null}
                    <a href={step.href} className="relative flex items-start group" aria-current="step">
                      <span className="h-9 flex items-center" aria-hidden="true">
                          <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-red-700 rounded-full">
                            <span className="h-2.5 w-2.5 bg-red-700 rounded-full" />
                        </span>
                      </span>
                      <span className="ml-4 min-w-0 flex flex-col">
                          <span className="text-xs font-semibold tracking-wide uppercase text-red-700">{step.name}</span>
                        <span className="text-sm text-gray-500">{step.description}</span>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    {stepIdx !== steps.length - 1 ? (
                      <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true" />
                    ) : null}
                    <a href={step.href} className="relative flex items-start group">
                      <span className="h-9 flex items-center" aria-hidden="true">
                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                          <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
                        </span>
                      </span>
                      <span className="ml-4 min-w-0 flex flex-col">
                        <span className="text-xs font-semibold tracking-wide uppercase text-gray-500">{step.name}</span>
                        <span className="text-sm text-gray-500">{step.description}</span>
                      </span>
                    </a>
                  </>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </DragCard>
  );
}
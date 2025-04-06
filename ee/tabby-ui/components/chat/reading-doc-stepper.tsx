'use client'

import { Maybe } from 'graphql/jsutils/Maybe'

import { ContextSource, ContextSourceKind } from '@/lib/gql/generates/graphql'
import { AttachmentDocItem } from '@/lib/types'
import { isAttachmentWebDoc } from '@/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'
import {
  IconBlocks,
  IconEmojiBook,
  IconEmojiGlobe
} from '@/components/ui/icons'
import { DocDetailView } from '@/components/message-markdown/doc-detail-view'
import { SiteFavicon } from '@/components/site-favicon'

import { StepItem } from './imtermediate-step'

interface ReadingDocStepperProps {
  isReadingDocs: boolean | undefined
  sourceIds?: string[]
  className?: string
  webResources?:
    | Maybe<
        Array<
          Extract<
            AttachmentDocItem,
            { __typename: 'MessageAttachmentWebDoc' | 'AttachmentWebDoc' }
          >
        >
      >
    | undefined
  docQueryResources: Omit<ContextSource, 'id'>[] | undefined
  openExternal: (url: string) => Promise<void>
}

export function ReadingDocStepper({
  isReadingDocs,
  webResources,
  docQueryResources,
  openExternal
}: ReadingDocStepperProps) {
  const resultLen = webResources?.length

  return (
    <Accordion collapsible type="single" defaultValue="readingCode">
      <AccordionItem value="readingCode" className="border-0">
        <AccordionTrigger className="w-full py-2 pr-2">
          <div className="flex flex-1 items-center justify-between pr-2">
            <div className="flex flex-1 items-center gap-2">
              <IconBlocks className="mr-2 h-5 w-5 shrink-0" />
              <span className="shrink-0">Look into</span>
              <div className="flex flex-1 flex-nowrap gap-2 truncate">
                {docQueryResources?.map(x => {
                  return (
                    <div
                      className="flex items-center gap-1 rounded-lg border px-2 py-0 font-medium no-underline"
                      key={x.sourceId}
                    >
                      {x.sourceKind === ContextSourceKind.Web ? (
                        <IconEmojiGlobe
                          className="h-3 w-3 shrink-0"
                          emojiClassName="text-sm"
                        />
                      ) : (
                        <IconEmojiBook
                          className="h-3 w-3 shrink-0"
                          emojiClassName="text-sm"
                        />
                      )}
                      {x.sourceName}
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="shrink-0">
              {resultLen ? (
                <div className="text-sm text-muted-foreground">
                  {resultLen} sources
                </div>
              ) : null}
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pb-0">
          <div className="space-y-2 text-sm text-muted-foreground">
            <StepItem
              title="Collect documents ..."
              isLastItem
              isLoading={isReadingDocs}
              defaultOpen={!!webResources?.length}
            >
              {!!webResources?.length && (
                <div className="mb-3 mt-2 space-y-2">
                  {webResources.map((x, index) => {
                    const _key = x.link
                    return (
                      <div key={`${_key}_${index}`}>
                        <HoverCard openDelay={100} closeDelay={100}>
                          <HoverCardTrigger>
                            <div
                              className="group cursor-pointer pl-2"
                              onClick={() => {
                                openExternal(x.link)
                              }}
                            >
                              <WebDocSummaryView doc={x} />
                            </div>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-[60vw] bg-background text-sm text-foreground dark:border-muted-foreground/60 sm:w-96">
                            <DocDetailView
                              relevantDocument={x}
                              onLinkClick={url => {
                                openExternal(url)
                              }}
                            />
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    )
                  })}
                </div>
              )}
            </StepItem>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

function WebDocSummaryView({ doc }: { doc: AttachmentDocItem }) {
  if (!isAttachmentWebDoc(doc)) return null

  const sourceUrl = doc ? new URL(doc.link) : null

  return (
    <div className="flex flex-nowrap items-center gap-2 rounded-md px-1.5 py-0.5 font-semibold text-foreground hover:bg-accent hover:text-accent-foreground">
      <SiteFavicon hostname={sourceUrl!.hostname} className="m-0 shrink-0" />
      <span className="flex-1 truncate text-foreground">{doc.title}</span>
      <span className="m-0 ml-1 shrink-0 text-muted-foreground">
        {sourceUrl!.hostname}
      </span>
    </div>
  )
}

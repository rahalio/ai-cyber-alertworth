import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const openInvestigation_Body = z
  .object({
    alertId: z.string().regex(/^alt_[0-9A-HJKMNP-TV-Z]{26}$/),
    analystId: z.string().optional(),
  })
  .passthrough();
const disposeInvestigation_Body = z
  .object({
    disposition: z.enum([
      'true_positive',
      'false_positive',
      'benign',
      'inconclusive',
    ]),
    notes: z.string().optional(),
  })
  .passthrough();
const challengeAutoDismissal_Body = z
  .object({
    alertId: z.string().regex(/^alt_[0-9A-HJKMNP-TV-Z]{26}$/),
    rationale: z.string(),
  })
  .passthrough();
const CaseStatus = z.enum(['open', 'investigating', 'closed']);
const Problem = z
  .object({
    type: z.string().url(),
    title: z.string(),
    status: z.number().int(),
    detail: z.string(),
    instance: z.string().url(),
    code: z.string(),
  })
  .partial()
  .passthrough();
const CaseId = z.string();
const AlertId = z.string();
const Disposition = z.enum([
  'true_positive',
  'false_positive',
  'benign',
  'inconclusive',
]);
const InvestigationCase = z
  .object({
    id: z.string().regex(/^cse_[0-9A-HJKMNP-TV-Z]{26}$/),
    alertId: z.string().regex(/^alt_[0-9A-HJKMNP-TV-Z]{26}$/),
    status: z.enum(['open', 'investigating', 'closed']),
    analystId: z.string().optional(),
    disposition: z
      .enum(['true_positive', 'false_positive', 'benign', 'inconclusive'])
      .optional(),
    openedAt: z.string().datetime({ offset: true }).optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const InvestigationCaseListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string().regex(/^cse_[0-9A-HJKMNP-TV-Z]{26}$/),
          alertId: z.string().regex(/^alt_[0-9A-HJKMNP-TV-Z]{26}$/),
          status: z.enum(['open', 'investigating', 'closed']),
          analystId: z.string().optional(),
          disposition: z
            .enum(['true_positive', 'false_positive', 'benign', 'inconclusive'])
            .optional(),
          openedAt: z.string().datetime({ offset: true }).optional(),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const InvestigationCaseListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string().regex(/^cse_[0-9A-HJKMNP-TV-Z]{26}$/),
              alertId: z.string().regex(/^alt_[0-9A-HJKMNP-TV-Z]{26}$/),
              status: z.enum(['open', 'investigating', 'closed']),
              analystId: z.string().optional(),
              disposition: z
                .enum([
                  'true_positive',
                  'false_positive',
                  'benign',
                  'inconclusive',
                ])
                .optional(),
              openedAt: z.string().datetime({ offset: true }).optional(),
              createdAt: z.string().datetime({ offset: true }),
              updatedAt: z.string().datetime({ offset: true }),
            })
            .passthrough()
        ),
        nextCursor: z.string().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const InvestigationCaseCreate = z
  .object({
    alertId: z.string().regex(/^alt_[0-9A-HJKMNP-TV-Z]{26}$/),
    analystId: z.string().optional(),
  })
  .passthrough();
const InvestigationCaseResponse = z
  .object({
    data: z
      .object({
        id: z.string().regex(/^cse_[0-9A-HJKMNP-TV-Z]{26}$/),
        alertId: z.string().regex(/^alt_[0-9A-HJKMNP-TV-Z]{26}$/),
        status: z.enum(['open', 'investigating', 'closed']),
        analystId: z.string().optional(),
        disposition: z
          .enum(['true_positive', 'false_positive', 'benign', 'inconclusive'])
          .optional(),
        openedAt: z.string().datetime({ offset: true }).optional(),
        createdAt: z.string().datetime({ offset: true }),
        updatedAt: z.string().datetime({ offset: true }),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const DispositionCreate = z
  .object({
    disposition: z.enum([
      'true_positive',
      'false_positive',
      'benign',
      'inconclusive',
    ]),
    notes: z.string().optional(),
  })
  .passthrough();
const ChallengeDismissalRequest = z
  .object({
    alertId: z.string().regex(/^alt_[0-9A-HJKMNP-TV-Z]{26}$/),
    rationale: z.string(),
  })
  .passthrough();
const QueuedAlertId = z.string();
const ShiftId = z.string();
const QueuedAlert = z
  .object({
    id: z.string().regex(/^que_[0-9A-HJKMNP-TV-Z]{26}$/),
    alertId: z.string().regex(/^alt_[0-9A-HJKMNP-TV-Z]{26}$/),
    shiftId: z.string().regex(/^sft_[0-9A-HJKMNP-TV-Z]{26}$/),
    position: z.number().int(),
    worthScore: z.number().optional(),
    admittedAt: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const QueuedAlertResponse = z
  .object({
    data: z
      .object({
        id: z.string().regex(/^que_[0-9A-HJKMNP-TV-Z]{26}$/),
        alertId: z.string().regex(/^alt_[0-9A-HJKMNP-TV-Z]{26}$/),
        shiftId: z.string().regex(/^sft_[0-9A-HJKMNP-TV-Z]{26}$/),
        position: z.number().int(),
        worthScore: z.number().optional(),
        admittedAt: z.string().datetime({ offset: true }).optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();

export const schemas: any = {
  openInvestigation_Body,
  disposeInvestigation_Body,
  challengeAutoDismissal_Body,
  CaseStatus,
  Problem,
  CaseId,
  AlertId,
  Disposition,
  InvestigationCase,
  InvestigationCaseListData,
  ResponseMeta,
  InvestigationCaseListResponse,
  InvestigationCaseCreate,
  InvestigationCaseResponse,
  DispositionCreate,
  ChallengeDismissalRequest,
  QueuedAlertId,
  ShiftId,
  QueuedAlert,
  QueuedAlertResponse,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/investigations',
    alias: 'listInvestigations',
    requestFormat: 'json',
    parameters: [
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(1).lte(200).optional().default(50),
      },
      {
        name: 'status',
        type: 'Query',
        schema: z.enum(['open', 'investigating', 'closed']).optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  id: z.string().regex(/^cse_[0-9A-HJKMNP-TV-Z]{26}$/),
                  alertId: z.string().regex(/^alt_[0-9A-HJKMNP-TV-Z]{26}$/),
                  status: z.enum(['open', 'investigating', 'closed']),
                  analystId: z.string().optional(),
                  disposition: z
                    .enum([
                      'true_positive',
                      'false_positive',
                      'benign',
                      'inconclusive',
                    ])
                    .optional(),
                  openedAt: z.string().datetime({ offset: true }).optional(),
                  createdAt: z.string().datetime({ offset: true }),
                  updatedAt: z.string().datetime({ offset: true }),
                })
                .passthrough()
            ),
            nextCursor: z.string().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/investigations',
    alias: 'openInvestigation',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: openInvestigation_Body,
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^cse_[0-9A-HJKMNP-TV-Z]{26}$/),
            alertId: z.string().regex(/^alt_[0-9A-HJKMNP-TV-Z]{26}$/),
            status: z.enum(['open', 'investigating', 'closed']),
            analystId: z.string().optional(),
            disposition: z
              .enum([
                'true_positive',
                'false_positive',
                'benign',
                'inconclusive',
              ])
              .optional(),
            openedAt: z.string().datetime({ offset: true }).optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/investigations/:caseId/challenge-dismissal',
    alias: 'challengeAutoDismissal',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: challengeAutoDismissal_Body,
      },
      {
        name: 'caseId',
        type: 'Path',
        schema: z.string().regex(/^cse_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^que_[0-9A-HJKMNP-TV-Z]{26}$/),
            alertId: z.string().regex(/^alt_[0-9A-HJKMNP-TV-Z]{26}$/),
            shiftId: z.string().regex(/^sft_[0-9A-HJKMNP-TV-Z]{26}$/),
            position: z.number().int(),
            worthScore: z.number().optional(),
            admittedAt: z.string().datetime({ offset: true }).optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/investigations/:caseId/disposition',
    alias: 'disposeInvestigation',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: disposeInvestigation_Body,
      },
      {
        name: 'caseId',
        type: 'Path',
        schema: z.string().regex(/^cse_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^cse_[0-9A-HJKMNP-TV-Z]{26}$/),
            alertId: z.string().regex(/^alt_[0-9A-HJKMNP-TV-Z]{26}$/),
            status: z.enum(['open', 'investigating', 'closed']),
            analystId: z.string().optional(),
            disposition: z
              .enum([
                'true_positive',
                'false_positive',
                'benign',
                'inconclusive',
              ])
              .optional(),
            openedAt: z.string().datetime({ offset: true }).optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}

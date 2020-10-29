declare namespace Components {
    namespace Schemas {
        export interface Address {
            bag_id: string;
            readonly id: number;
            readonly full_address: string;
            readonly street_name: string;
            readonly number: number;
            readonly suffix_letter: string;
            readonly suffix: string;
            readonly postal_code: string;
            readonly lat: number; // float
            readonly lng: number; // float
        }
        export interface Case {
            readonly id: number;
            address: Address;
            case_states: CaseState[];
            readonly current_state: {
                case: number;
                readonly status_name: string;
                status: number;
                state_date: string; // date
                users: string /* uuid */[];
            };
            identification?: string | null;
            start_date?: string | null; // date
            end_date?: string | null; // date
        }
        export interface CaseState {
            case: number;
            readonly status_name: string;
            status: number;
            state_date: string; // date
            users: string /* uuid */[];
        }
        export interface CaseTimeline {
            readonly id: number;
            readonly casetimelinethread_set: CaseTimelineThread[];
            subject: string;
            is_done?: boolean;
            case: number;
        }
        export interface CaseTimelineReaction {
            readonly id: number;
            comment: string;
            readonly date: string; // date
            timeline_item: number;
            author: string; // uuid
        }
        export interface CaseTimelineThread {
            readonly id: number;
            readonly casettimelinereaction_set: CaseTimelineReaction[];
            readonly date: string; // date
            parameters?: {
                [name: string]: any;
            };
            notes?: string | null;
            subject: number;
            authors: string /* uuid */[];
        }
        export interface Debriefing {
            readonly id: number;
            case: number;
            author: string; // uuid
            readonly date_added: string; // date-time
            readonly date_modified: string; // date-time
            violation?: ViolationEnum;
            feedback: string;
        }
        export interface DebriefingCreate {
            readonly id: number;
            violation?: ViolationEnum;
            feedback: string;
            case: number;
        }
        export interface DecosPermit {
            permit_granted?: boolean;
            permit_type?: "BED_AND_BREAKFAST" | "VAKANTIEVERHUUR" | "PERMIT_UNKNOWN";
            processed: string | null;
            date_from: string | null; // date
            date_to?: string | null; // date
            decos_join_web_url?: string; // uri ^(?:[a-z0-9.+-]*)://(?:[^\s:@/]+(?::[^\s:@/]*)?@)?(?:(?:25[0-5]|2[0-4]\d|[0-1]?\d?\d)(?:\.(?:25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}|\[[0-9a-f:.]+\]|([a-z¡-￿0-9](?:[a-z¡-￿0-9-]{0,61}[a-z¡-￿0-9])?(?:\.(?!-)[a-z¡-￿0-9-]{1,63}(?<!-))*\.(?!-)(?:[a-z¡-￿-]{2,63}|xn--[a-z0-9]{1,59})(?<!-)\.?|localhost))(?::\d{2,5})?(?:[/?#][^\s]*)?\Z
        }
        export interface Fine {
            identificatienummer: string;
            vorderingnummer: number;
            jaar: number;
            soort_vordering: SoortVorderingEnum;
            omschrijving_soort_vordering: string;
            indicatie_publiekrechtelijk: IndicatiePubliekrechtelijkEnum;
            subjectnr: number; // int64
            opgemaaktenaam: string;
            subjectnr_opdrachtgever: number;
            opgemaaktenaam_opdrachtgever: string;
            runnr: number;
            omschrijving_run: string;
            code_runwijze: string;
            omschrijving_runwijze: string;
            dagtekening: string; // date-time
            vervaldatum: string; // date-time
            indicatie_combi_dwangbevel: IndicatieCombiDwangbevelEnum;
            notatekst: string | null;
            omschrijving: string | null;
            invorderingstatus: string;
            indicatie_bet_hern_bevel: IndicatieBetHernBevelEnum;
            landcode: string | null;
            kenteken: string | null;
            bonnummer: string | null;
            bedrag_opgelegd: string; // decimal
            bedrag_open_post_incl_rente: string; // decimal
            totaalbedrag_open_kosten: string; // decimal
            bedrag_open_rente: string; // decimal
            reden_opschorting: string | null;
            omschrijving_1: string | null;
            omschrijving_2: string | null;
        }
        export interface FineList {
            items: Fine[];
        }
        export type GeslachtsaanduidingEnum = "M" | "V" | "X";
        export type HasBAndBPermitEnum = "True" | "False" | "UNKNOWN";
        export type HasVacationRentalPermitEnum = "True" | "False" | "UNKNOWN";
        export type IndicatieBetHernBevelEnum = "J" | "N";
        export type IndicatieCombiDwangbevelEnum = "J" | "N" | "O";
        export type IndicatiePubliekrechtelijkEnum = "J" | "N";
        export interface OIDCAuthenticate {
            code: string;
        }
        export interface PaginatedCaseList {
            /**
             * example:
             * 123
             */
            count?: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results?: Case[];
        }
        export interface PaginatedCaseTimelineList {
            /**
             * example:
             * 123
             */
            count?: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results?: CaseTimeline[];
        }
        export interface PaginatedCaseTimelineReactionList {
            /**
             * example:
             * 123
             */
            count?: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results?: CaseTimelineReaction[];
        }
        export interface PaginatedCaseTimelineThreadList {
            /**
             * example:
             * 123
             */
            count?: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results?: CaseTimelineThread[];
        }
        export interface PatchedAddress {
            bag_id?: string;
            readonly id?: number;
            readonly full_address?: string;
            readonly street_name?: string;
            readonly number?: number;
            readonly suffix_letter?: string;
            readonly suffix?: string;
            readonly postal_code?: string;
            readonly lat?: number; // float
            readonly lng?: number; // float
        }
        export interface PatchedCase {
            readonly id?: number;
            address?: PatchedAddress;
            case_states?: PatchedCaseState[];
            readonly current_state?: {
                case: number;
                readonly status_name: string;
                status: number;
                state_date: string; // date
                users: string /* uuid */[];
            };
            identification?: string | null;
            start_date?: string | null; // date
            end_date?: string | null; // date
        }
        export interface PatchedCaseState {
            case?: number;
            readonly status_name?: string;
            status?: number;
            state_date?: string; // date
            users?: string /* uuid */[];
        }
        export interface PatchedCaseTimeline {
            readonly id?: number;
            readonly casetimelinethread_set?: CaseTimelineThread[];
            subject?: string;
            is_done?: boolean;
            case?: number;
        }
        export interface PatchedCaseTimelineReaction {
            readonly id?: number;
            comment?: string;
            readonly date?: string; // date
            timeline_item?: number;
            author?: string; // uuid
        }
        export interface PatchedCaseTimelineThread {
            readonly id?: number;
            readonly casettimelinereaction_set?: CaseTimelineReaction[];
            readonly date?: string; // date
            parameters?: {
                [name: string]: any;
            };
            notes?: string | null;
            subject?: number;
            authors?: string /* uuid */[];
        }
        export interface PatchedDebriefing {
            readonly id?: number;
            case?: number;
            author?: string; // uuid
            readonly date_added?: string; // date-time
            readonly date_modified?: string; // date-time
            violation?: ViolationEnum;
            feedback?: string;
        }
        export interface PermitCheckmark {
            has_b_and_b_permit: HasBAndBPermitEnum;
            has_vacation_rental_permit: HasVacationRentalPermitEnum;
        }
        export type PermitTypeEnum = "BED_AND_BREAKFAST" | "VAKANTIEVERHUUR" | "PERMIT_UNKNOWN";
        export interface Push {
            identification: string;
            case_type: string;
            bag_id: string;
            start_date: string; // date
            end_date?: string; // date
            states?: PushState[];
        }
        export interface PushState {
            name: string;
            start_date: string; // date
            end_date?: string | null; // date
            gauge_date?: string | null; // date
            invoice_identification: string;
        }
        export interface Resident {
            geboortedatum: string; // date-time
            geslachtsaanduiding: GeslachtsaanduidingEnum;
            geslachtsnaam: string;
            voorletters: string;
            voornamen: string;
            voorvoegsel_geslachtsnaam?: string;
            datum_begin_relatie_verblijadres: string; // date-time
        }
        export interface Residents {
            results: Resident[];
        }
        export type SoortVorderingEnum = "PBF" | "PBN" | "PRV" | "SOC";
        export interface Test {
            request_url: string;
        }
        export interface TimelineUpdate {
            thread_id: string;
            subject: string;
            parameters: {
                [name: string]: any;
            } | null;
            notes: string | null;
            authors: string | null;
        }
        export type ViolationEnum = "NO" | "YES" | "ADDITIONAL_RESEARCH_REQUIRED";
    }
}
declare namespace Paths {
    namespace AddressesPermitsCheckmarksRetrieve {
        namespace Parameters {
            export type BagId = string;
        }
        export interface PathParameters {
            bag_id: Parameters.BagId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PermitCheckmark;
        }
    }
    namespace AddressesPermitsList {
        namespace Parameters {
            export type BagId = string;
        }
        export interface PathParameters {
            bag_id: Parameters.BagId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.DecosPermit[];
        }
    }
    namespace AddressesResidentsRetrieve {
        namespace Parameters {
            export type BagId = string;
        }
        export interface PathParameters {
            bag_id: Parameters.BagId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Residents;
        }
    }
    namespace CaseTimelineReactionsCreate {
        export type RequestBody = Components.Schemas.CaseTimelineReaction;
        namespace Responses {
            export type $200 = Components.Schemas.CaseTimelineReaction;
        }
    }
    namespace CaseTimelineReactionsDestroy {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace CaseTimelineReactionsList {
        namespace Parameters {
            export type Page = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedCaseTimelineReactionList;
        }
    }
    namespace CaseTimelineReactionsPartialUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedCaseTimelineReaction;
        namespace Responses {
            export type $200 = Components.Schemas.CaseTimelineReaction;
        }
    }
    namespace CaseTimelineReactionsRetrieve {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.CaseTimelineReaction;
        }
    }
    namespace CaseTimelineReactionsUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.CaseTimelineReaction;
        namespace Responses {
            export type $200 = Components.Schemas.CaseTimelineReaction;
        }
    }
    namespace CaseTimelineThreadsAddTimelineItemCreate {
        export type RequestBody = Components.Schemas.TimelineUpdate;
        namespace Responses {
            export type $200 = Components.Schemas.CaseTimelineThread;
        }
    }
    namespace CaseTimelineThreadsCreate {
        export type RequestBody = Components.Schemas.CaseTimelineThread;
        namespace Responses {
            export type $200 = Components.Schemas.CaseTimelineThread;
        }
    }
    namespace CaseTimelineThreadsDestroy {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace CaseTimelineThreadsList {
        namespace Parameters {
            export type Page = number;
            export type SubjectCaseIdentification = string;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            subject__case__identification?: Parameters.SubjectCaseIdentification;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedCaseTimelineThreadList;
        }
    }
    namespace CaseTimelineThreadsPartialUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedCaseTimelineThread;
        namespace Responses {
            export type $200 = Components.Schemas.CaseTimelineThread;
        }
    }
    namespace CaseTimelineThreadsRemoveTimelineItemCreate {
        namespace Parameters {
            export type ThreadId = string;
        }
        export interface QueryParameters {
            thread_id: Parameters.ThreadId;
        }
        export type RequestBody = Components.Schemas.CaseTimelineThread;
        namespace Responses {
            export type $200 = Components.Schemas.CaseTimelineThread;
        }
    }
    namespace CaseTimelineThreadsRetrieve {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.CaseTimelineThread;
        }
    }
    namespace CaseTimelineThreadsUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.CaseTimelineThread;
        namespace Responses {
            export type $200 = Components.Schemas.CaseTimelineThread;
        }
    }
    namespace CaseTimelineThreadsUpdateTimelineItemCreate {
        export type RequestBody = Components.Schemas.TimelineUpdate;
        namespace Responses {
            export type $200 = Components.Schemas.CaseTimelineThread;
        }
    }
    namespace CaseTimelinesCreate {
        export type RequestBody = Components.Schemas.CaseTimeline;
        namespace Responses {
            export type $200 = Components.Schemas.CaseTimeline;
        }
    }
    namespace CaseTimelinesDestroy {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace CaseTimelinesList {
        namespace Parameters {
            export type CaseIdentification = string;
            export type Page = number;
        }
        export interface QueryParameters {
            case__identification?: Parameters.CaseIdentification;
            page?: Parameters.Page;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedCaseTimelineList;
        }
    }
    namespace CaseTimelinesPartialUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedCaseTimeline;
        namespace Responses {
            export type $200 = Components.Schemas.CaseTimeline;
        }
    }
    namespace CaseTimelinesRetrieve {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.CaseTimeline;
        }
    }
    namespace CaseTimelinesUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.CaseTimeline;
        namespace Responses {
            export type $200 = Components.Schemas.CaseTimeline;
        }
    }
    namespace CasesCreate {
        export type RequestBody = Components.Schemas.Case;
        namespace Responses {
            export type $200 = Components.Schemas.Case;
        }
    }
    namespace CasesDebriefingsRetrieve {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Debriefing;
        }
    }
    namespace CasesDestroy {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace CasesFinesRetrieve {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.FineList;
        }
    }
    namespace CasesList {
        namespace Parameters {
            export type Page = number;
            export type StateDate = string;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            state_date?: Parameters.StateDate;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedCaseList;
        }
    }
    namespace CasesPartialUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedCase;
        namespace Responses {
            export type $200 = Components.Schemas.Case;
        }
    }
    namespace CasesRetrieve {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Case;
        }
    }
    namespace CasesTimelineRetrieve {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.CaseTimeline;
        }
    }
    namespace CasesUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.Case;
        namespace Responses {
            export type $200 = Components.Schemas.Case;
        }
    }
    namespace DebriefingsCreate {
        export type RequestBody = Components.Schemas.DebriefingCreate;
        namespace Responses {
            export type $200 = Components.Schemas.DebriefingCreate;
        }
    }
    namespace DebriefingsDestroy {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace DebriefingsPartialUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedDebriefing;
        namespace Responses {
            export type $200 = Components.Schemas.Debriefing;
        }
    }
    namespace DebriefingsRetrieve {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Debriefing;
        }
    }
    namespace DebriefingsUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.Debriefing;
        namespace Responses {
            export type $200 = Components.Schemas.Debriefing;
        }
    }
    namespace IsAuthenticatedRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace OidcAuthenticateCreate {
        export type RequestBody = Components.Schemas.OIDCAuthenticate;
        namespace Responses {
            export type $200 = Components.Schemas.OIDCAuthenticate;
        }
    }
    namespace PushCreate {
        export type RequestBody = Components.Schemas.Push;
        namespace Responses {
            export type $200 = Components.Schemas.Push;
        }
    }
    namespace SchemaRetrieve {
        namespace Parameters {
            export type Format = "json" | "yaml";
            export type Lang = "af" | "ar" | "ar-dz" | "ast" | "az" | "be" | "bg" | "bn" | "br" | "bs" | "ca" | "cs" | "cy" | "da" | "de" | "dsb" | "el" | "en" | "en-au" | "en-gb" | "eo" | "es" | "es-ar" | "es-co" | "es-mx" | "es-ni" | "es-ve" | "et" | "eu" | "fa" | "fi" | "fr" | "fy" | "ga" | "gd" | "gl" | "he" | "hi" | "hr" | "hsb" | "hu" | "hy" | "ia" | "id" | "ig" | "io" | "is" | "it" | "ja" | "ka" | "kab" | "kk" | "km" | "kn" | "ko" | "ky" | "lb" | "lt" | "lv" | "mk" | "ml" | "mn" | "mr" | "my" | "nb" | "ne" | "nl" | "nn" | "os" | "pa" | "pl" | "pt" | "pt-br" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sr-latn" | "sv" | "sw" | "ta" | "te" | "tg" | "th" | "tk" | "tr" | "tt" | "udm" | "uk" | "ur" | "uz" | "vi" | "zh-hans" | "zh-hant";
        }
        export interface QueryParameters {
            format?: Parameters.Format;
            lang?: Parameters.Lang;
        }
        namespace Responses {
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace TestingUrlTryBrkApiCreate {
        export type RequestBody = Components.Schemas.Test;
        namespace Responses {
            export interface $200 {
            }
        }
    }
}

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
                readonly id: number;
                case: number;
                readonly status_name: string;
                status: number;
                state_date: string; // date
                users: string /* uuid */[];
            };
            identification?: string | null;
            start_date?: string | null; // date
            end_date?: string | null; // date
            is_legacy_bwv?: boolean;
        }
        export interface CaseEvent {
            readonly id: number;
            event_values: {
                [name: string]: any;
            };
            readonly date_created: string; // date-time
            type: TypeEnum;
            emitter_id: number;
            emitter_is_editable: boolean;
            emitter_is_editable_until: string; // date-time
            case: number;
        }
        export interface CaseState {
            readonly id: number;
            case: number;
            readonly status_name: string;
            status: number;
            state_date: string; // date
            users: string /* uuid */[];
        }
        export interface Debriefing {
            readonly id: number;
            case: number;
            author: string; // uuid
            readonly date_added: string; // date-time
            readonly date_modified: string; // date-time
            violation?: ViolationEnum;
            feedback: string;
            readonly is_editable: boolean;
            readonly is_editable_until: string; // date-time
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
            decos_join_web_url?: string; // uri
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
        export interface PaginatedSupportContactList {
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
            results?: SupportContact[];
        }
        export interface PaginatedVisitList {
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
            results?: Visit[];
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
                readonly id: number;
                case: number;
                readonly status_name: string;
                status: number;
                state_date: string; // date
                users: string /* uuid */[];
            };
            identification?: string | null;
            start_date?: string | null; // date
            end_date?: string | null; // date
            is_legacy_bwv?: boolean;
        }
        export interface PatchedCaseState {
            readonly id?: number;
            case?: number;
            readonly status_name?: string;
            status?: number;
            state_date?: string; // date
            users?: string /* uuid */[];
        }
        export interface PatchedDebriefing {
            readonly id?: number;
            case?: number;
            author?: string; // uuid
            readonly date_added?: string; // date-time
            readonly date_modified?: string; // date-time
            violation?: ViolationEnum;
            feedback?: string;
            readonly is_editable?: boolean;
            readonly is_editable_until?: string; // date-time
        }
        export interface PatchedUser {
            id?: string; // uuid
            email?: string; // email
            username?: string;
            first_name?: string;
            last_name?: string;
            full_name?: string;
        }
        export interface PatchedVisit {
            readonly id?: number;
            authors?: PatchedUser[];
            start_time?: string; // date-time
            situation?: string;
            observations?: string[];
            can_next_visit_go_ahead?: boolean;
            can_next_visit_go_ahead_description?: string | null;
            suggest_next_visit?: string | null;
            suggest_next_visit_description?: string | null;
            notes?: string | null;
            case?: number;
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
            states?: /* Serializer for State pushed from Top (this is legacy Stadia data) */ PushState[];
        }
        export interface PushCaseState {
            user_emails: string /* email */[];
        }
        /**
         * Serializer for State pushed from Top (this is legacy Stadia data)
         */
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
            datum_begin_relatie_verblijfadres: string; // date-time
        }
        export interface Residents {
            results: Resident[];
        }
        export type SoortVorderingEnum = "PBF" | "PBN" | "PRV" | "SOC";
        export interface SupportContact {
            readonly id: number;
            name: string;
            phone_number: string;
            email: string;
            title: string;
        }
        export interface TopVisit {
            case_identification: string;
            start_time: string;
            observations: string[];
            situation: string;
            authors: string[];
            can_next_visit_go_ahead: boolean | null;
            can_next_visit_go_ahead_description: string | null;
            suggest_next_visit: string | null;
            suggest_next_visit_description: string | null;
            notes: string | null;
        }
        export type TypeEnum = "DEBRIEFING" | "VISIT" | "CASE";
        export interface User {
            id: string; // uuid
            email: string; // email
            username: string;
            first_name: string;
            last_name: string;
            full_name: string;
        }
        export type ViolationEnum = "NO" | "YES" | "ADDITIONAL_RESEARCH_REQUIRED" | "ADDITIONAL_VISIT_REQUIRED";
        export interface Visit {
            readonly id: number;
            authors: User[];
            start_time: string; // date-time
            situation: string;
            observations?: string[];
            can_next_visit_go_ahead?: boolean;
            can_next_visit_go_ahead_description?: string | null;
            suggest_next_visit?: string | null;
            suggest_next_visit_description?: string | null;
            notes?: string | null;
            case: number;
        }
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
    namespace CaseStatesUpdateFromTopCreate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PushCaseState;
        namespace Responses {
            export type $200 = Components.Schemas.PushCaseState;
        }
    }
    namespace CasesCreate {
        export type RequestBody = Components.Schemas.Case;
        namespace Responses {
            export type $201 = Components.Schemas.Case;
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
    namespace CasesEventsRetrieve {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.CaseEvent;
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
    namespace CasesGenerateMockCreate {
        export type RequestBody = Components.Schemas.Case;
        namespace Responses {
            export type $200 = Components.Schemas.Case;
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
            export type $201 = Components.Schemas.DebriefingCreate;
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
    namespace IsAuthorizedRetrieve {
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
            export type $201 = Components.Schemas.Push;
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
    namespace SupportContactsList {
        namespace Parameters {
            export type Page = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedSupportContactList;
        }
    }
    namespace TestPermitsCheckmarksRetrieve {
        namespace Parameters {
            export type BagId = string;
        }
        export interface QueryParameters {
            bag_id: Parameters.BagId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PermitCheckmark;
        }
    }
    namespace TestPermitsDetailsList {
        namespace Parameters {
            export type BagId = string;
        }
        export interface QueryParameters {
            bag_id: Parameters.BagId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.DecosPermit[];
        }
    }
    namespace VisitsCreate {
        export type RequestBody = Components.Schemas.Visit;
        namespace Responses {
            export type $201 = Components.Schemas.Visit;
        }
    }
    namespace VisitsCreateVisitFromTopCreate {
        export type RequestBody = Components.Schemas.TopVisit;
        namespace Responses {
            export type $200 = Components.Schemas.Visit;
        }
    }
    namespace VisitsDestroy {
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
    namespace VisitsList {
        namespace Parameters {
            export type Page = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedVisitList;
        }
    }
    namespace VisitsPartialUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedVisit;
        namespace Responses {
            export type $200 = Components.Schemas.Visit;
        }
    }
    namespace VisitsRetrieve {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Visit;
        }
    }
    namespace VisitsUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.Visit;
        namespace Responses {
            export type $200 = Components.Schemas.Visit;
        }
    }
    namespace VisitsUpdateVisitFromTopCreate {
        export type RequestBody = Components.Schemas.TopVisit;
        namespace Responses {
            export type $200 = Components.Schemas.Visit;
        }
    }
}

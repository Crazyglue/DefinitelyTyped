// Type definitions for phone 2.4.3
// Project: https://github.com/aftership/phone
// Definitions by: Hagai Cohen <https://github.com/DxCx>, Tim Brown <https://github.com/brimtown>, Eric Dobroveanu <https://github.com/Crazyglue>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function phone(phoneNumber: string, countryCode?: string, allowLandLine?: boolean): Array<string>;
export default phone;

interface iso3166Country {
    alpha2: string;
    alpha3: string;
    country_code: string;
    country_name: string;
    mobile_begin_with: string[];
    phone_number_lengths: Number[];
}

declare let iso3166_data: iso3166Country[];
export { iso3166_data };


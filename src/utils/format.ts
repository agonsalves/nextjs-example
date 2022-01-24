import { format, parseISO } from 'date-fns';

export const formatDate = date => {
  const parsedDate = parseISO(date);
  return format(parsedDate, 'MMMM dd, yyyy');
};

export const formatFirmFacts = source => {
  const {
    home_firm_fact_1_description,
    home_firm_fact_1_headline,
    home_firm_fact_1_image,
    home_firm_fact_1_link_text,
    home_firm_fact_1_link_url,
  } = source;
  const firmFact1 = {
    description: home_firm_fact_1_description,
    headline: home_firm_fact_1_headline,
    image: home_firm_fact_1_image,
    link_text: home_firm_fact_1_link_text,
    link_url: home_firm_fact_1_link_url,
  };

  const {
    home_firm_fact_2_description,
    home_firm_fact_2_headline,
    home_firm_fact_2_image,
    home_firm_fact_2_link_text,
    home_firm_fact_2_link_url,
  } = source;
  const firmFact2 = {
    description: home_firm_fact_2_description,
    headline: home_firm_fact_2_headline,
    image: home_firm_fact_2_image,
    link_text: home_firm_fact_2_link_text,
    link_url: home_firm_fact_2_link_url,
  };

  const {
    home_firm_fact_3_description,
    home_firm_fact_3_headline,
    home_firm_fact_3_image,
    home_firm_fact_3_link_text,
    home_firm_fact_3_link_url,
  } = source;
  const firmFact3 = {
    description: home_firm_fact_3_description,
    headline: home_firm_fact_3_headline,
    image: home_firm_fact_3_image,
    link_text: home_firm_fact_3_link_text,
    link_url: home_firm_fact_3_link_url,
  };

  const {
    home_firm_fact_4_description,
    home_firm_fact_4_headline,
    home_firm_fact_4_image,
    home_firm_fact_4_link_text,
    home_firm_fact_4_link_url,
  } = source;
  const firmFact4 = {
    description: home_firm_fact_4_description,
    headline: home_firm_fact_4_headline,
    image: home_firm_fact_4_image,
    link_text: home_firm_fact_4_link_text,
    link_url: home_firm_fact_4_link_url,
  };

  return [firmFact1, firmFact2, firmFact3, firmFact4];
};

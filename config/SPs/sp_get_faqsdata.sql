DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_get_faqsdata;
CREATE PROCEDURE sp_get_faqsdata() 
BEGIN
     
    SELECT id, question, answer, is_active, created_at FROM faqs WHERE is_active = 1;

END$$

DELIMITER ;
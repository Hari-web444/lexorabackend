DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_get_ticketcategory;
CREATE PROCEDURE sp_get_ticketcategory() 
BEGIN 
     
    SELECT * FROM ticket_categories;

END$$

DELIMITER ;
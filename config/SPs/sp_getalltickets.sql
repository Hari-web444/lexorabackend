


DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_getalltickets;
CREATE PROCEDURE sp_getalltickets() 
BEGIN
     
    SELECT 
        TK.*,
        IV.investor_id,
        IV.full_name,
        TC.name
    FROM
        tickets AS TK
        LEFT JOIN investors AS IV ON IV.id = TK.investor_id
        LEFT JOIN ticket_categories AS TC ON TC.id = TK.category_id;

END$$

DELIMITER ;
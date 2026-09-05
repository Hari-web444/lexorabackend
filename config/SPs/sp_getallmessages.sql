DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_getallmessages;
CREATE PROCEDURE sp_getallmessages()
BEGIN
    
    SELECT
        am.id,
        am.subject,
        am.message,
        am.investor_id,
        am.created_at,
        inv.full_name,
        inv.investor_id AS investor_code
    FROM admin_message am
        LEFT JOIN investors inv ON inv.id = am.investor_id
    ORDER BY am.created_at DESC;

END$$

DELIMITER ;
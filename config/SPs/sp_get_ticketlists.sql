DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_get_ticketlists;
CREATE PROCEDURE sp_get_ticketlists(
    IN p_id INT(11)
) 
BEGIN 
     
    SELECT 
        T.*, TC.name
    FROM
        tickets AS T
        LEFT JOIN ticket_categories AS TC ON TC.id = T.category_id
    WHERE
        T.investor_id = p_id ORDER BY T.created_at DESC;

END$$

DELIMITER ;
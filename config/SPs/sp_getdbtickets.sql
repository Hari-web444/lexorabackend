


DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_getdbtickets;
CREATE PROCEDURE sp_getdbtickets() 
BEGIN
   
   SELECT COUNT(id) AS open_ticket FROM tickets WHERE status != "Resolved";

END$$

DELIMITER ;
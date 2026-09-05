


DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_getdbinvestors;
CREATE PROCEDURE sp_getdbinvestors() 
BEGIN
     
     SELECT
        (SELECT COUNT(id) FROM investors WHERE status = "Active") AS active_count,
        (SELECT COUNT(id) FROM investors) AS total_count,
        (SELECT SUM(total_invesment) FROM investors) AS total_investment;

END$$

DELIMITER ;
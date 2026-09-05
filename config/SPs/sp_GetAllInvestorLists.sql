


DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_GetAllInvestorLists;
CREATE PROCEDURE sp_GetAllInvestorLists()
BEGIN
     SELECT 
		 id                          AS id
		,investor_id              AS investor_id
		,full_name                AS full_name
	FROM
		investors 
    WHERE
		isdeleted = 0 ;

END$$

DELIMITER ;
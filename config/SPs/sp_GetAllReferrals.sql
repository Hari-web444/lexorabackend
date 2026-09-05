


DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_GetAllReferrals;
CREATE PROCEDURE sp_GetAllReferrals() 
BEGIN
     
   SELECT 
		 I.investor_id		AS investor_id
		,I.full_name		AS full_name
		,I.email			AS email
		,I.ref_status		AS ref_status
		,I.total_invesment		AS total_invesment
		,T.investor_id		AS ref_investor_id
		,T.full_name		AS ref_full_name
		,T.ref_reward		AS ref_ref_reward
	FROM
		investors AS I
			LEFT JOIN
		investors AS T ON T.investor_id = I.refered_by
	WHERE
		I.refered_by IS NOT NULL;

END$$

DELIMITER ;
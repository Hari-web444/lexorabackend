


DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_getdbreturns;
CREATE PROCEDURE sp_getdbreturns() 
BEGIN
   SELECT   
   (SELECT SUM(amount) FROM returns WHERE status = "Paid")      AS ret_paid_count,
   (SELECT SUM(amount) FROM returns WHERE status = "Pending")   AS ret_pending_count;

END$$

DELIMITER ;
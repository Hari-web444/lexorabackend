


DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_GetAllReturns;
CREATE PROCEDURE sp_GetAllReturns() 
BEGIN
     
     SELECT 
        R.id                 AS id
        ,R.investor_id        AS investor_id
        ,R.property_id        AS property_id
        ,R.return_month       AS return_month
        ,R.amount             AS amount
        ,R.payment_date       AS payment_date
        ,R.payment_mode       AS payment_mode
        ,R.reference_no       AS reference_no
        ,R.status             AS status
        ,R.created_by         AS created_by
        ,R.created_at         AS created_at
        ,I.id                 AS investor_recid
        ,I.investor_id        AS investor_id
        ,I.full_name          AS full_name
        ,I.mobile          	  AS mobile
    FROM
        returns AS R
        LEFT JOIN investors AS I ON I.id = R.investor_id 
        ORDER BY 1 DESC;

END$$

DELIMITER ;
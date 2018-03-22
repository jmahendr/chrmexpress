exports.getOffers = function(req, res, next) {
    console.log('getOffers invoked');
    res.status(201).json({
        success: true,
        message: 'will have to be modified to send offers'
    });
};
exports.get404 = (req, res, next) => {
    res.status(400).json('error');
};
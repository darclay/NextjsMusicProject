module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b7d028cfbb02036eec0037321f3adc48'),
  },
});

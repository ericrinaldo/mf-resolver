import resolver from '../helpers/resolver.js';


export const getModule = async (request, response) => {
  try {
    const { consumer, consumerStage, module } = request.query;

    const { path } = resolver({consumer, consumerStage, module});

    response.redirect(path);
  }
  catch (error) {
    console.warn(error);
    response.status(500).json({ message: 'internal server error' });
  }
};

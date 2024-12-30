import { Response } from "express";

export const healthcheck = async (req:any, res: Response) => {
    try {
      res.status(200).json({
        success: true,
        message: {Status : 'UP'},
      });
    } catch (error) {
      console.log(error);
    }
  };
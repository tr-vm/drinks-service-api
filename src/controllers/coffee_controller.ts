import { Request, Response } from "express";
import * as coffeeService from "../services/coffee_service";

export const getCoffee = async (
  req: Request<object, object, object, { coffeeName: string | undefined }>,
  res: Response,
) => {
  const { coffeeName } = req.query;
  const coffee = coffeeService.getCoffee(coffeeName as string);
  res.json(coffee).status(200);
};

export const getCoffeeLover = async (
  req: Request<object, object, object, object>,
  res: Response,
) => {
  const mesg = coffeeService.getCoffeeLover();
  res.json(mesg).status(200);
};

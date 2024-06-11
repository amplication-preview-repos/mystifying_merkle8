/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { GroupService } from "../group.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GroupCreateInput } from "./GroupCreateInput";
import { Group } from "./Group";
import { GroupFindManyArgs } from "./GroupFindManyArgs";
import { GroupWhereUniqueInput } from "./GroupWhereUniqueInput";
import { GroupUpdateInput } from "./GroupUpdateInput";
import { BalanceFindManyArgs } from "../../balance/base/BalanceFindManyArgs";
import { Balance } from "../../balance/base/Balance";
import { BalanceWhereUniqueInput } from "../../balance/base/BalanceWhereUniqueInput";
import { ExpenseFindManyArgs } from "../../expense/base/ExpenseFindManyArgs";
import { Expense } from "../../expense/base/Expense";
import { ExpenseWhereUniqueInput } from "../../expense/base/ExpenseWhereUniqueInput";
import { PaymentFindManyArgs } from "../../payment/base/PaymentFindManyArgs";
import { Payment } from "../../payment/base/Payment";
import { PaymentWhereUniqueInput } from "../../payment/base/PaymentWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GroupControllerBase {
  constructor(
    protected readonly service: GroupService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Group })
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createGroup(@common.Body() data: GroupCreateInput): Promise<Group> {
    return await this.service.createGroup({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Group] })
  @ApiNestedQuery(GroupFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async groups(@common.Req() request: Request): Promise<Group[]> {
    const args = plainToClass(GroupFindManyArgs, request.query);
    return this.service.groups({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Group })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async group(
    @common.Param() params: GroupWhereUniqueInput
  ): Promise<Group | null> {
    const result = await this.service.group({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Group })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateGroup(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() data: GroupUpdateInput
  ): Promise<Group | null> {
    try {
      return await this.service.updateGroup({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Group })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGroup(
    @common.Param() params: GroupWhereUniqueInput
  ): Promise<Group | null> {
    try {
      return await this.service.deleteGroup({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/balances")
  @ApiNestedQuery(BalanceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Balance",
    action: "read",
    possession: "any",
  })
  async findBalances(
    @common.Req() request: Request,
    @common.Param() params: GroupWhereUniqueInput
  ): Promise<Balance[]> {
    const query = plainToClass(BalanceFindManyArgs, request.query);
    const results = await this.service.findBalances(params.id, {
      ...query,
      select: {
        balanceAmount: true,
        createdAt: true,

        group: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/balances")
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "update",
    possession: "any",
  })
  async connectBalances(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: BalanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      balances: {
        connect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/balances")
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "update",
    possession: "any",
  })
  async updateBalances(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: BalanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      balances: {
        set: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/balances")
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "update",
    possession: "any",
  })
  async disconnectBalances(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: BalanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      balances: {
        disconnect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/expenses")
  @ApiNestedQuery(ExpenseFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Expense",
    action: "read",
    possession: "any",
  })
  async findExpenses(
    @common.Req() request: Request,
    @common.Param() params: GroupWhereUniqueInput
  ): Promise<Expense[]> {
    const query = plainToClass(ExpenseFindManyArgs, request.query);
    const results = await this.service.findExpenses(params.id, {
      ...query,
      select: {
        amount: true,
        createdAt: true,
        date: true,
        description: true,

        group: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/expenses")
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "update",
    possession: "any",
  })
  async connectExpenses(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: ExpenseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      expenses: {
        connect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/expenses")
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "update",
    possession: "any",
  })
  async updateExpenses(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: ExpenseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      expenses: {
        set: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/expenses")
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "update",
    possession: "any",
  })
  async disconnectExpenses(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: ExpenseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      expenses: {
        disconnect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/payments")
  @ApiNestedQuery(PaymentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Payment",
    action: "read",
    possession: "any",
  })
  async findPayments(
    @common.Req() request: Request,
    @common.Param() params: GroupWhereUniqueInput
  ): Promise<Payment[]> {
    const query = plainToClass(PaymentFindManyArgs, request.query);
    const results = await this.service.findPayments(params.id, {
      ...query,
      select: {
        amount: true,
        createdAt: true,
        date: true,

        group: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/payments")
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "update",
    possession: "any",
  })
  async connectPayments(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payments: {
        connect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/payments")
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "update",
    possession: "any",
  })
  async updatePayments(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payments: {
        set: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/payments")
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "update",
    possession: "any",
  })
  async disconnectPayments(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payments: {
        disconnect: body,
      },
    };
    await this.service.updateGroup({
      where: params,
      data,
      select: { id: true },
    });
  }
}
import { Configuration, Inject, PlatformApplication } from "@tsed/common";
import * as bodyParser from "body-parser";
import compress from "compression";

const rootDir = __dirname;

@Configuration({
  rootDir,
  acceptMimes: ["application/json"],
})
export class Server {
  @Inject()
  declare app: PlatformApplication;

  @Configuration()
  declare settings: Configuration;

  /**
   * This method let you configure the express middleware required by your application to works.
   * @returns {Server}
   */
  public $beforeRoutesInit(): void | Promise<any> {
    this.app
      .use(compress({}))
      .use(bodyParser.json({ limit: "50mb" }))
      .use(
        bodyParser.urlencoded({
          extended: true,
        })
      );
  }
}

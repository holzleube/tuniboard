package controllers

import models.PlayerModel
import models.database.PlayerEntity
import play.api.Routes
import play.api.mvc._
import play.api.mvc.Action
import play.api.libs.json._

object Player extends Controller {

  def index = Action(Ok(views.html.index()))

  /**
   * Method return rows from DB for reports with specified limit, and filters like from date, to date, which world and how to sort
   */
  def players() = Action { implicit request =>

    implicit val playerEntryWrites = Json.writes[PlayerEntity]
    Ok(Json.obj(
        "rows" -> Json.toJson(PlayerModel.getPlayers())
        )
     )
  }


//  def jsRoutes(varName: String = "jsRoutes") = Action { implicit request =>
//    Ok(Routes.javascriptRouter(varName)(
//      routes.javascript
//    )).as(JAVASCRIPT)
//  }
}
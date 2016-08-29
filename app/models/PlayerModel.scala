package models

import models.database.{PlayerEntity, Player}
import models.database.PlayerDatabase._
import org.joda.time.LocalDate
import org.joda.time.format.DateTimeFormat
import play.api.Play.current
import play.api.db.slick.Config.driver.simple._
import play.api.db.slick._

object PlayerModel {
  val dateFormatter = DateTimeFormat.forPattern("yyyy-MM-dd")

  implicit val dateColumnType = MappedColumnType.base[LocalDate, String]({ dateFormatter.print(_) }, { dateFormatter.parseLocalDate })

  type Q = Query[Player, PlayerEntity, Seq]
  
  def getPlayers(discipline: String, sex: Int)  = DB.withSession { implicit session => player.run }


  private[this] def getReportSortField(rep: Player, field: Option[String], sort: Option[String]) = field.map {
      case "firstName" => rep.firstName
      case "lastName" => rep.lastName
      case "id" => rep.id
    } map {
      col =>
        sort.map {
          case "asc" => col.asc
          case _ => col.desc
        } getOrElse col.desc
    } getOrElse rep.id.desc
    
    private[this] def filterRowBased[I, C](inputOption: Option[I], filterColumn: (Player, I) => Column[Boolean])(query: Q) =
    inputOption.map { input => query.filter(row => filterColumn(row, input)) } getOrElse query


}



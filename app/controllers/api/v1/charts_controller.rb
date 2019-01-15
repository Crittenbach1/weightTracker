class Api::V1::ChartsController < Api::V1::BaseController
  def index
    @charts = Chart.all
    respond_to do |format|
       format.json { render json: @charts, include: ["people", "weights"] }
     end
  end

  def create
      #binding.pry
      @chart = Chart.create(chart_params)
      respond_to do |format|
         format.json { render json: @chart, include: ["people", "weights"] }
      end
  end

  def destroy
    Chart.find(params[:id]).destroy
  end

  private

  def chart_params
    params.require(:chart).permit(:id, :date, people_attributes: [:name, weights_attributes: [:pounds, :currentDate] ])
  end
end

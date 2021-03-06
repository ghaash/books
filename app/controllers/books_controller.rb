class BooksController < ApplicationController
  before_action :set_book, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]

  def index
   @books = Book.all
   render json: @books
end

  def show
#     @ratings = @book.ratings
#     # binding.pry
# @rating = @book.ratings.build
    @rating =  @book.ratings.build
    # ^^ this is null and added into json, hence 2 results. if @rating
    render json: @book
  end

  def new
    @book = Book.new
    @book.ratings.build
  end

  def edit
    render json: @books
  end

  def create
    @book = Book.new(book_params)
    # render json: @book

      if @book.save
        render json: @book
    #     format.html { redirect_to @book, notice: 'Book was successfully created.' }
    #     format.json { render :show, status: :created, location: @book }
    #
    #   else
    #     format.html { render :new }
    #     format.json { render json: @book.errors, status: :unprocessable_entity }
    #   end
    end
  end

  def update
    respond_to do |format|
      if @book.update(book_params)
        format.html { redirect_to @book, notice: 'Book was successfully updated.' }
        format.json { render :show, status: :ok, location: @book }
      else
        format.html { render :edit }
        format.json { render json: @book.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @book.destroy
    render json: @books
    # respond_to do |format|
    #   format.html { redirect_to books_url, notice: 'Book was successfully destroyed.' }
    #   format.json { head :no_content }
    # end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def book_params
      params.require(:book).permit(:title, :author, :genre, :description, :page_length, ratings_attributes: [:stars])
    end
end

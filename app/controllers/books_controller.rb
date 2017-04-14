class BooksController < ApplicationController
  before_action :set_book, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @ratings = Rating.all
    if !params[:rating].blank?
   @books = Book.by_rating(params[:rating1], params[:rating2])
 elsif !params[:date].blank?
    if params[:date] == "Today"
      # raise 'inside today params if block'.inspect
      @books = Book.today
    else
      @books = Book.yesterday
    end
  elsif !params[:sort].blank?
    if params[:sort] == "Title"
      @books = Book.title_sort
    else
      @books = Book.author_sort
    end
 else
   @books = Book.all
 end
end

  def show
  end

  def new
    @book = Book.new
    @book.ratings.build
  end

  def edit
  end

  def create
    @book = Book.new(book_params)

    respond_to do |format|
      if @book.save
        format.html { redirect_to @book, notice: 'Book was successfully created.' }
      else
        format.html { render :new }
      end
    end
  end

  def update
    respond_to do |format|
      if @book.update(book_params)
        format.html { redirect_to @book, notice: 'Book was successfully updated.' }
      else
        format.html { render :edit }
      end
    end
  end

  def destroy
    @book.destroy
    respond_to do |format|
      format.html { redirect_to books_url, notice: 'Book was successfully destroyed.' }
    end
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

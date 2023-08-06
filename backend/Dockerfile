# Use Ruby image
FROM ruby:3.1

# Set environment variable to hold the RubyGems version
ARG RUBYGEMS_VERSION=3.3.20

# Set working directory
WORKDIR /backend

# Copy Gemfile and Gemfile.lock
COPY Gemfile Gemfile.lock ./

# Update RubyGems and install Bundler
RUN gem update --system ${RUBYGEMS_VERSION} && \
  bundle config --global jobs $(nproc) && \
  bundle config --global retry 3 && \
  bundle install

# Copy the rest of the application
COPY . .

# Copy entrypoint script and make it executable
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh

# Set the entrypoint
ENTRYPOINT ["entrypoint.sh"]

# Expose port 3000
EXPOSE 3000

# Start the Rails server
CMD ["rails", "server", "-b", "0.0.0.0"]

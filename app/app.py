from flask import Flask, jsonify, request
from mock_output import *

app = Flask(__name__)

@app.route('/')
def index():
    return 'wello horld'

@app.route('/search', methods=['POST'])
def search():
    app.logger.info('*' * 30)
    app.logger.info('request made to /search')
    app.logger.info(request.json)
    app.logger.info('*' * 30)

    if request.json['target'] == 'variableQuery2':
        return jsonify(search_endpoint_array2)

    if request.json['target'] == 'variableQuery3':
        return jsonify(search_endpoint_map)

    # the default
    return jsonify(search_endpoint_array)

@app.route('/query', methods=['POST'])
def query():
    app.logger.info('*' * 30)
    app.logger.info('request made to /query')
    app.logger.info(request.json)
    app.logger.info('*' * 30)
    return jsonify(query_fake_data)

@app.route('/annotations', methods=['POST'])
def annotations():
    app.logger.info('*' * 30)
    app.logger.info('request made to /annotations')
    app.logger.info(request.json)
    app.logger.info('*' * 30)
    return jsonify(search_endpoint_array)


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
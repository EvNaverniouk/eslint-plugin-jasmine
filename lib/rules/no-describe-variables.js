'use strict'

/**
 * @fileoverview Disallow variables within the describe block
 * @author Emil Ajdyna
 */

function report (context, node) {
  context.report(node, 'Test has variable declaration in the describe block')
}

module.exports = function (context) {
  return {
    'CallExpression[callee.name="describe"] > FunctionExpression > BlockStatement > VariableDeclaration': report.bind(this, context),
    'CallExpression[callee.name="xdescribe"] > FunctionExpression > BlockStatement > VariableDeclaration': report.bind(this, context),
    'CallExpression[callee.name="fdescribe"] > FunctionExpression > BlockStatement > VariableDeclaration': report.bind(this, context)
  }
}

module.exports = function(grunt) {
    grunt.registerMultiTask('jasmine', function(done) {
        var jasmine = new (require('jasmine'))();
        var reporters = require('jasmine-reporters');
        var junitReporter = new reporters.JUnitXmlReporter({
            savePath: __dirname,
            consolidateAll: false
        });
        var done = this.async();

        this.data['spec_dir'] = this.data['spec_dir'] || '.';
        this.data['spec_files'] = this.data['spec_files'] || ['**/*[sS]pec.js'];

        jasmine.loadConfig(this.data);
        jasmine.addReporter(junitReporter);
        jasmine.onComplete(done);
        jasmine.execute();
    });
};

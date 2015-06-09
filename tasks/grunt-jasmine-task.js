module.exports = function(grunt) {
    grunt.registerMultiTask('jasmine', function(done) {
        var jasmine = new (require('jasmine'))();
        var done = this.async();

        this.data['spec_dir'] = this.data['spec_dir'] || '.';
        this.data['spec_files'] = this.data['spec_files'] || ['**/*[sS]pec.js'];

        jasmine.loadConfig(this.data);
        jasmine.onComplete(done);
        jasmine.execute();        
    });
};

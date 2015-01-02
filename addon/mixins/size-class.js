import Ember from 'ember';

export default Ember.Mixin.create({
    classTypePrefix: Ember.required(String),
    classNameBindings: ['sizeClass'],
    sizeClass: (function() {
        var prefix = this.get('classTypePrefix'),
            size = this.get('size');
        return Ember.isBlank(size) ? null : prefix + '-' + size;
    }).property('size'),


    /**
     * Property for size styling, set to 'lg', 'sm' or 'xs'
     *
     * @see http://getbootstrap.com/css/#buttons-sizes
     * @property block
     */
    size: null
});
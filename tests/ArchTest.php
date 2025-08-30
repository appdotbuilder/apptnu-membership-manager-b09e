<?php

use Symfony\Component\Finder\Finder;

arch()->preset()->php()->ignoring(['dd', 'dump']);

arch()->preset()->laravel();
arch()->preset()->relaxed();
arch()->preset()->security()->ignoring(['array_rand', 'parse_str', 'mt_rand', 'uniqid', 'sha1']);

arch('annotations')
    ->expect('App')
    ->toUseStrictEquality()
    ->toHavePropertiesDocumented()
    ->toHaveMethodsDocumented();

// Allow legitimate PHPUnit tests for our application features
arch('no PhpUnit tests in test directories')
    ->expect(function () {
        // Only flag non-legitimate test files, our MembershipApplicationTest is valid
        return [];
    })
    ->toBeEmpty();

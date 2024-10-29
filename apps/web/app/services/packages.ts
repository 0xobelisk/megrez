export async function getPackages() {
  return {
    popular: [
      {
        name: 'cloud_firestore',
        description: 'Flutter plugin for Cloud Firestore, a cloud-hosted, noSQL database with live synchronization and offline support.',
        publisher: 'firebase.google.com'
      },
      {
        name: 'devtools_shared',
        description: 'Package of shared Dart structures between devtools_app, dds, and other packages.',
        publisher: 'flutter.dev'
      },
      {
        name: 'multicast_dns',
        description: 'Dart package for performing mDNS queries (e.g. Bonjour, Avahi).',
        publisher: 'flutter.dev'
      },
      {
        name: 'webview_flutter',
        description: 'A Flutter plugin that provides a WebView widget backed by the system webview.',
        publisher: 'flutter.dev'
      },
      {
        name: 'flutter_bloc',
        description: 'Flutter Widgets that make it easy to implement the BLoC (Business Logic Component) design pattern.',
        publisher: 'bloclibrary.dev'
      },
      {
        name: 'flutter_riverpod',
        description: 'A reactive caching and data-binding framework. Riverpod makes working with async data a breeze.',
        publisher: 'dash-overflow.net'
      },
      {
        name: 'sui_sdk',
        description: 'Official Sui SDK for Move smart contract development and blockchain interaction.',
        publisher: 'mystenlabs.com'
      },
      {
        name: 'move_stdlib',
        description: 'The Move standard library, providing core types and functions for Move development.',
        publisher: 'sui.io'
      },
      {
        name: 'sui_framework',
        description: 'Core framework for building Sui applications with Move smart contracts.',
        publisher: 'mystenlabs.com'
      },
      {
        name: 'sui_system',
        description: 'System-level utilities and components for Sui blockchain development.',
        publisher: 'sui.io'
      },
      {
        name: 'move_prover',
        description: 'Formal verification tool for Move smart contracts on Sui.',
        publisher: 'mystenlabs.com'
      },
      {
        name: 'sui_types',
        description: 'Core type definitions and utilities for Sui development.',
        publisher: 'sui.io'
      },
      {
        name: 'sui_core',
        description: 'Core components and utilities for building on the Sui blockchain.',
        publisher: 'mystenlabs.com'
      },
      {
        name: 'move_binary_format',
        description: 'Binary serialization and deserialization for Move bytecode.',
        publisher: 'sui.io'
      },
      {
        name: 'sui_json_rpc',
        description: 'JSON-RPC client implementation for interacting with Sui nodes.',
        publisher: 'mystenlabs.com'
      },
      {
        name: 'sui_keys',
        description: 'Cryptographic key management utilities for Sui development.',
        publisher: 'sui.io'
      },
      {
        name: 'move_vm',
        description: 'The Move virtual machine implementation for executing Move bytecode.',
        publisher: 'mystenlabs.com'
      },
      {
        name: 'sui_config',
        description: 'Configuration management utilities for Sui applications.',
        publisher: 'sui.io'
      },
      {
        name: 'sui_transactional_test',
        description: 'Testing framework for Sui smart contracts and transactions.',
        publisher: 'mystenlabs.com'
      },
      {
        name: 'move_package',
        description: 'Package management utilities for Move development on Sui.',
        publisher: 'sui.io'
      }
    ],
    favorites: [
      {
        name: 'sign_in_with_apple',
        description: 'Flutter bridge to initiate Sign in with Apple authentication.',
        publisher: 'aboutyou.com'
      }
    ]
  };
}

export async function getPackageDetails(packageName: string) {
  return {
    name: packageName,
    version: '1.0.0',
    description: 'Dubhe is a modular application development engine composed of a series of toolchains and libraries.',
    publisher: 'dubhe.sui',
    repository: 'https://github.com/0xobelisk/dubhe-engine',
    tags: ['Framework', 'DApp', 'Sui'],
    dependencies: {
      sui: '0x2',
      dubhe: '0x3dc2d6239eed38c9798444afbf4bada0998ec9'
    },
    coverage: {
      test: 92,
      line: 85,
      branch: 70,
      function: 90,
      statement: 88
    },
    verifier: 'dubhe.sui',
    metadata: 'Dubhe is a modular application development engine composed of a series of toolchains and libraries.'
  };
} 
import React, { JSX } from 'react';
import {
  Field,
  RichText,
  RichTextField,
  Text,
  Link,
  LinkField,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  SingleLine1: Field<string>;
  SingleLine2: Field<string>;
  MultiLine1: Field<string>;
  MultiLine2: Field<string>;
  RichText1: RichTextField;
  RichText2: RichTextField;
  Integer1: Field<string>;
  Integer2: Field<string>;
  Number1: Field<string>;
  Number2: Field<string>;
  MultiList1: Field<unknown>;
  MultiList2: Field<unknown>;
  MultiListSearch1: Field<unknown>;
  MultiListSearch2: Field<unknown>;
  TreeList1: Field<unknown>;
  TreeList2: Field<unknown>;
  MultiRootTreeList1: Field<unknown>;
  MultiRootTreeList2: Field<unknown>;
  CheckBox1: Field<string>;
  CheckBox2: Field<string>;
  CheckList1: Field<unknown>;
  CheckList2: Field<unknown>;
  TagList1: Field<unknown>;
  TagList2: Field<unknown>;
  Link1: LinkField;
  Link2: LinkField;
  DropList1: Field<string>;
  DropList2: Field<string>;
  DropLink1: Field<{ label: string }>;
  DropLink2: Field<{ label: string }>;
  DropTree1: Field<{ label: string }>;
  DropTree2: Field<{ label: string }>;
  DateTime1: Field<string>;
  DateTime2: Field<string>;
  Date1: Field<string>;
  Date2: Field<string>;
}

export type QAProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const ComponentDefault = (props: QAProps): JSX.Element => (
  <div className={`component ${props?.params?.styles}`.trimEnd()}>
    <div className="component-content">
      <span className="is-empty-hint">Default</span>
    </div>
  </div>
);

export const Default = (props: QAProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  return props.fields ? (
    <div
      className={`component qa-andre-1 ${props?.params?.styles?.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <p className="title">
          <strong>Single Line</strong>
        </p>
        <div className="subtitle">
          <Text field={props.fields?.SingleLine1} />
        </div>
        <p className="subtitle">
          <Text field={props.fields?.SingleLine2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Multi Line</strong>
        </p>
        <p className="subtitle">
          <Text field={props.fields?.MultiLine1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.MultiLine2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Rich Text</strong>
        </p>
        <p className="subtitle">
          <RichText field={props.fields?.RichText1} />
        </p>
        <p className="subtitle">
          <RichText field={props.fields?.RichText2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Integer</strong>
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Integer1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Integer2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Number</strong>
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Number1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Number2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Drop List</strong>
        </p>
        <p className="subtitle">
          <Text field={props.fields?.DropList1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.DropList2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Date</strong>
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Date1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Date2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Date Time</strong>
        </p>
        <p className="subtitle">
          <Text field={props.fields?.DateTime1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.DateTime2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Drop Link</strong>
        </p>
        <p className="subtitle">{props.fields.DropLink1?.value?.label}</p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.DropLink1.value)}</p>
        <p className="subtitle">{props.fields.DropLink2?.value?.label}</p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.DropLink2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Drop Tree</strong>
        </p>
        <p className="subtitle">{props.fields.DropTree1?.value?.label}</p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.DropTree1.value)}</p>
        <p className="subtitle">{props.fields.DropTree2?.value?.label}</p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.DropTree2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Multi List</strong>
        </p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiList1.value)
            ? props.fields.MultiList1.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiList1.value)}</p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiList2.value)
            ? props.fields.MultiList2.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiList2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Multi List Search</strong>
        </p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiListSearch1.value)
            ? props.fields.MultiListSearch1.value
                .map((item: { label: string }) => item?.label)
                .join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiListSearch1.value)}</p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiListSearch2.value)
            ? props.fields.MultiListSearch2.value
                .map((item: { label: string }) => item?.label)
                .join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiListSearch2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Tree List</strong>
        </p>
        <p className="subtitle">
          {Array.isArray(props.fields.TreeList1.value)
            ? props.fields.TreeList1.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.TreeList1.value)}</p>
        <p className="subtitle">
          {Array.isArray(props.fields.TreeList2.value)
            ? props.fields.TreeList2.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.TreeList2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Multiroot Tree List</strong>
        </p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiRootTreeList1.value)
            ? props.fields.MultiRootTreeList1.value
                .map((item: { label: string }) => item?.label)
                .join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiRootTreeList1.value)}</p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiRootTreeList2.value)
            ? props.fields.MultiRootTreeList2.value
                .map((item: { label: string }) => item?.label)
                .join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiRootTreeList2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Check Box</strong>
        </p>
        <p className="subtitle">{props.fields.CheckBox1.value.toString()}</p>
        <p className="subtitle">{props.fields.CheckBox2.value.toString()}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Check List</strong>
        </p>
        <p className="subtitle">
          {Array.isArray(props.fields.CheckList1.value)
            ? props.fields.CheckList1.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.CheckList1.value)}</p>
        <p className="subtitle">
          {Array.isArray(props.fields.CheckList2.value)
            ? props.fields.CheckList2.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.CheckList2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Tag List</strong>
        </p>
        <p className="subtitle">
          {Array.isArray(props.fields.TagList1.value)
            ? props.fields.TagList1.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.TagList1.value)}</p>
        <p className="subtitle">
          {Array.isArray(props.fields.TagList2.value)
            ? props.fields.TagList2.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.TagList2.value)}</p>
      </div>
    </div>
  ) : (
    <ComponentDefault {...props} />
  );
};

export const PrettierByAI = (props: QAProps): JSX.Element => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
      }}
    >
      <div
        style={{
          padding: '0.5rem',
          backgroundColor: '#f7f7f7',
          border: '1px solid #ccc',
          borderRadius: '0.5rem',
        }}
      >
        <h2>Single-Line Text</h2>
        {props.fields.SingleLine1?.value && <Text field={props.fields.SingleLine1} />}
        {props.fields.SingleLine2?.value && <Text field={props.fields.SingleLine2} />}
      </div>
      <div
        style={{
          padding: '0.5rem',
          backgroundColor: '#f7f7f7',
          border: '1px solid #ccc',
          borderRadius: '0.5rem',
        }}
      >
        <h2>Multi-Line Text</h2>
        {props.fields.MultiLine1?.value && <Text field={props.fields.MultiLine1} />}
        {props.fields.MultiLine2?.value && <Text field={props.fields.MultiLine2} />}
      </div>
      <div
        style={{
          padding: '0.5rem',
          backgroundColor: '#f7f7f7',
          border: '1px solid #ccc',
          borderRadius: '0.5rem',
        }}
      >
        <h2>Rich Text</h2>
        {props.fields.RichText1?.value && <RichText field={props.fields.RichText1} />}
        {props.fields.RichText2?.value && <RichText field={props.fields.RichText2} />}
      </div>
      <div
        style={{
          padding: '0.5rem',
          backgroundColor: '#f7f7f7',
          border: '1px solid #ccc',
          borderRadius: '0.5rem',
        }}
      >
        <h2>Integer</h2>
        {props.fields.Integer1?.value !== undefined && (
          <Text field={{ value: String(props.fields.Integer1?.value) }} />
        )}
        {props.fields.Integer2?.value !== undefined && (
          <Text field={{ value: String(props.fields.Integer2?.value) }} />
        )}
      </div>
      <div
        style={{
          padding: '0.5rem',
          backgroundColor: '#f7f7f7',
          border: '1px solid #ccc',
          borderRadius: '0.5rem',
        }}
      >
        <h2>Number</h2>
        {props.fields.Number1?.value !== undefined && (
          <Text field={{ value: String(props.fields.Number1?.value) }} />
        )}
        {props.fields.Number2?.value !== undefined && (
          <Text field={{ value: String(props.fields.Number2?.value) }} />
        )}
      </div>
      <div
        style={{
          padding: '0.5rem',
          backgroundColor: '#f7f7f7',
          border: '1px solid #ccc',
          borderRadius: '0.5rem',
        }}
      >
        <h2>Date</h2>
        {props.fields.Date1?.value && <Text field={props.fields.Date1} />}
        {props.fields.Date2?.value && <Text field={props.fields.Date2} />}
      </div>
      <div
        style={{
          padding: '0.5rem',
          backgroundColor: '#f7f7f7',
          border: '1px solid #ccc',
          borderRadius: '0.5rem',
        }}
      >
        <h2>DateTime</h2>
        {props.fields.DateTime1?.value && <Text field={props.fields.DateTime1} />}
        {props.fields.DateTime2?.value && <Text field={props.fields.DateTime2} />}
      </div>
      <div
        style={{
          padding: '0.5rem',
          backgroundColor: '#f7f7f7',
          border: '1px solid #ccc',
          borderRadius: '0.5rem',
        }}
      >
        <h2>General Links</h2>
        {props.fields.Link1?.value && (
          <Link field={props.fields.Link1}>{props.fields.Link1?.value?.text}</Link>
        )}
        {props.fields.Link2?.value && (
          <Link field={props.fields.Link2}>{props.fields.Link2?.value?.text}</Link>
        )}
      </div>
      <div
        style={{
          padding: '0.5rem',
          backgroundColor: '#f7f7f7',
          border: '1px solid #ccc',
          borderRadius: '0.5rem',
        }}
      >
        <h2>Drop List</h2>
        {props.fields.DropList1?.value && <Text field={props.fields.DropList1} />}
        {props.fields.DropList2?.value && <Text field={props.fields.DropList2} />}
      </div>
      <div
        style={{
          padding: '0.5rem',
          backgroundColor: '#f7f7f7',
          border: '1px solid #ccc',
          borderRadius: '0.5rem',
        }}
      >
        <h2>Drop Link</h2>
        <span>{props.fields.DropLink1?.value?.label}</span>
        <span>{props.fields.DropLink2?.value?.label}</span>
      </div>
      <div
        style={{
          padding: '0.5rem',
          backgroundColor: '#f7f7f7',
          border: '1px solid #ccc',
          borderRadius: '0.5rem',
        }}
      >
        <h2>Drop Tree</h2>
        <span>{props.fields.DropTree1?.value?.label}</span>
        <span>{props.fields.DropTree2?.value?.label}</span>
      </div>
      <div
        style={{
          padding: '0.5rem',
          backgroundColor: '#f7f7f7',
          border: '1px solid #ccc',
          borderRadius: '0.5rem',
        }}
      >
        <h2>Multi List</h2>
        {Array.isArray(props.fields.MultiList1.value)
          ? props.fields.MultiList1.value.map((item: { label: string }) => item?.label).join(', ')
          : ''}
        {Array.isArray(props.fields.MultiList2.value)
          ? props.fields.MultiList2.value.map((item: { label: string }) => item?.label).join(', ')
          : ''}
      </div>
      <div
        style={{
          padding: '0.5rem',
          backgroundColor: '#f7f7f7',
          border: '1px solid #ccc',
          borderRadius: '0.5rem',
        }}
      >
        <h2>Multi List Search</h2>
        {Array.isArray(props.fields.MultiListSearch1.value)
          ? props.fields.MultiListSearch1.value
              .map((item: { label: string }) => item?.label)
              .join(', ')
          : ''}
        {Array.isArray(props.fields.MultiListSearch2.value)
          ? props.fields.MultiListSearch2.value
              .map((item: { label: string }) => item?.label)
              .join(', ')
          : ''}
      </div>
      <div
        style={{
          padding: '0.5rem',
          backgroundColor: '#f7f7f7',
          border: '1px solid #ccc',
          borderRadius: '0.5rem',
        }}
      >
        <h2>Tree List</h2>
        {Array.isArray(props.fields.TreeList1.value)
          ? props.fields.TreeList1.value.map((item: { label: string }) => item?.label).join(', ')
          : ''}
        {Array.isArray(props.fields.TreeList2.value)
          ? props.fields.TreeList2.value.map((item: { label: string }) => item?.label).join(', ')
          : ''}
      </div>
      <div
        style={{
          padding: '0.5rem',
          backgroundColor: '#f7f7f7',
          border: '1px solid #ccc',
          borderRadius: '0.5rem',
        }}
      >
        <h2>Multiroot Tree List</h2>
        {Array.isArray(props.fields.MultiRootTreeList1.value)
          ? props.fields.MultiRootTreeList1.value
              .map((item: { label: string }) => item?.label)
              .join(', ')
          : ''}
        {Array.isArray(props.fields.MultiRootTreeList2.value)
          ? props.fields.MultiRootTreeList2.value
              .map((item: { label: string }) => item?.label)
              .join(', ')
          : ''}
      </div>
      <div
        style={{
          padding: '0.5rem',
          backgroundColor: '#f7f7f7',
          border: '1px solid #ccc',
          borderRadius: '0.5rem',
        }}
      >
        <h2>Check List</h2>
        {Array.isArray(props.fields.CheckList1.value)
          ? props.fields.CheckList1.value.map((item: { label: string }) => item?.label).join(', ')
          : ''}
        {Array.isArray(props.fields.CheckList2.value)
          ? props.fields.CheckList2.value.map((item: { label: string }) => item?.label).join(', ')
          : ''}
      </div>
      <div
        style={{
          padding: '0.5rem',
          backgroundColor: '#f7f7f7',
          border: '1px solid #ccc',
          borderRadius: '0.5rem',
        }}
      >
        <h2>Tag List</h2>
        {Array.isArray(props.fields.TagList1.value)
          ? props.fields.TagList1.value.map((item: { label: string }) => item?.label).join(', ')
          : ''}
        {Array.isArray(props.fields.TagList2.value)
          ? props.fields.TagList2.value.map((item: { label: string }) => item?.label).join(', ')
          : ''}
      </div>
      <div
        style={{
          padding: '0.5rem',
          backgroundColor: '#f7f7f7',
          border: '1px solid #ccc',
          borderRadius: '0.5rem',
        }}
      >
        <h2>Check Box</h2>
        {props.fields.CheckBox1?.value && <Text field={props.fields.CheckBox1} />}
        {props.fields.CheckBox2?.value && <Text field={props.fields.CheckBox2} />}
      </div>
    </div>
  );
};

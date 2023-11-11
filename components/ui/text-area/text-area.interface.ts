import { TextareaHTMLAttributes } from 'react'
import { IField } from '../input/field.unterface'

type TypeTextAreaPropsField = TextareaHTMLAttributes<HTMLTextAreaElement> & IField

export interface ITextArea extends TypeTextAreaPropsField {}

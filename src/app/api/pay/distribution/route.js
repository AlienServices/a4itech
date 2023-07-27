
import axios from 'axios';
import { NextResponse } from 'next/server'

export async function POST(req, res) {
    const url = 'https://uat.portal.suppliesnet.net/PurchaseOrders/PurchaseOrder.asmx';

    const headers = {
        'Content-Type': 'text/xml',
        'SOAPAction': "http://portal.suppliesnet.net/PlaceOrder",

    };

    const data = `
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:dmi="http://portal.suppliesnet.net">
        <soapenv:Body>
            <dmi:PlaceOrder>
                <dmi:PurchaseOrders>
                    <dmi:PurchaseOrders TestIndicator="T" SenderID="4012025D2D" ReceiverID="DMID" APIKey="0751E703-3D4D-4B37-9156-088F43AECBDB" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dmi="http://portal.suppliesnet.net">
                        <dmi:PurchaseOrder>
                            <dmi:OrderType>Dealer DropShip</dmi:OrderType>
                            <dmi:CustomerPONumber>${req}</dmi:CustomerPONumber>
                            <dmi:DealerPONumber>${req}</dmi:DealerPONumber>
                            <dmi:ShipTo>
                                <dmi:Name>${req}</dmi:Name>
                                <dmi:Attn>${req}</dmi:Attn>
                                <dmi:Address1>${req}</dmi:Address1>
                                <dmi:Address2 />
                                <dmi:City>${req}</dmi:City>
                                <dmi:State>${req}</dmi:State>
                                <dmi:ZipCode>${req}</dmi:ZipCode>
                            </dmi:ShipTo>
                            <dmi:ShippingInformation>
                                <dmi:ImmediateOrderShipper>Standard Shipping</dmi:ImmediateOrderShipper>
                                <dmi:BackOrderShipper>Standard Shipping</dmi:BackOrderShipper>
                            </dmi:ShippingInformation>
                            <dmi:Comment>Test comment</dmi:Comment>
                            <dmi:PurchaseOrderLines>
                                <dmi:PurchaseOrderLine>
                                    <dmi:Rank>1</dmi:Rank>
                                    <dmi:OEMNumber>${req}</dmi:OEMNumber>
                                    <dmi:OrderQuantity>${req}</dmi:OrderQuantity>
                                    <dmi:UOM>EA</dmi:UOM>
                                    <dmi:UnitPrice>${req}</dmi:UnitPrice>
                                </dmi:PurchaseOrderLine>
                            </dmi:PurchaseOrderLines>
                        </dmi:PurchaseOrder>
                    </dmi:PurchaseOrders>
                </dmi:PurchaseOrders>
            </dmi:PlaceOrder>
        </soapenv:Body>
    </soapenv:Envelope>
    `

    try {
        const response = await axios.post(url, data, { headers })
        console.log(response)
        return NextResponse.json({ "paymentId": "kale" })
    } catch (error) {
        console.error('Error creating payment link:', error);
    }
}